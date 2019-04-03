package codeburnt.filters;

import org.springframework.core.annotation.Order;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletResponseWrapper;
import java.io.IOException;
import java.io.OutputStream;
import javax.servlet.ServletOutputStream;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.util.zip.GZIPOutputStream;

//@Order(1)
//@WebFilter(filterName = "GzipFilter", urlPatterns = "/*\\.(css|html)/")
public class GzipFilter implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    }

    @Override
    public void destroy() {
    }

    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest  httpRequest  = (HttpServletRequest)  req;
        HttpServletResponse httpResponse = (HttpServletResponse) res;

        if ( acceptsGZipEncoding(httpRequest) ) {
            httpResponse.addHeader("Content-Encoding", "gzip");
            GZipServletResponseWrapper gzipResponse = new GZipServletResponseWrapper(httpResponse);
            chain.doFilter(req, gzipResponse);
            gzipResponse.close();
        } else {
            chain.doFilter(req, res);
        }
    }

    private boolean acceptsGZipEncoding(HttpServletRequest httpRequest) {
        String acceptEncoding = httpRequest.getHeader("Accept-Encoding");
        return acceptEncoding != null && acceptEncoding.indexOf("gzip") >= 0;
    }
}

class GZipServletOutputStream extends ServletOutputStream {
    private GZIPOutputStream gzipOutputStream;

    public GZipServletOutputStream(OutputStream output) throws IOException {
        super();
        this.gzipOutputStream = new GZIPOutputStream(output);
    }

    @Override
    public void close() throws IOException {
        this.gzipOutputStream.close();
    }

    @Override
    public void flush() throws IOException {
        this.gzipOutputStream.flush();
    }

    @Override
    public void write(byte b[]) throws IOException {
        this.gzipOutputStream.write(b);
    }

    @Override
    public void write(byte b[], int off, int len) throws IOException {
        this.gzipOutputStream.write(b, off, len);
    }

    @Override
    public void write(int b) throws IOException {
        this.gzipOutputStream.write(b);
    }

    @Override
    public boolean isReady() {
        return true;
    }

    @Override
    public void setWriteListener(WriteListener writeListener) {

    }
}

class GZipServletResponseWrapper extends HttpServletResponseWrapper {

    private static final int PRINT_WRITER = 0;
    private static final int OUTPUT_STREAM = 1;

    private int stream = 2;
    private PrintWriter printWriter;
    private GZipServletOutputStream gzipOutputStream;

    public GZipServletResponseWrapper(HttpServletResponse response) throws IOException {
        super(response);
    }

    public void close() throws IOException {
        if (this.stream == PRINT_WRITER) {
            this.printWriter.close();
        }
        else if (this.stream == OUTPUT_STREAM) {
            this.gzipOutputStream.close();
        }
    }

    @Override
    public void flushBuffer() throws IOException {
        if(this.stream == PRINT_WRITER) {
            this.printWriter.flush();
        }
        else if(this.stream == OUTPUT_STREAM){
            this.gzipOutputStream.flush();
        }
        else {
            super.flushBuffer();
        }
    }

    @Override
    public ServletOutputStream getOutputStream() throws IOException {
        if (this.stream == PRINT_WRITER) {
            throw new IllegalStateException("PrintWriter is in used, getting ServletOutputStream is not allowed");
        }
        if (this.gzipOutputStream == null) {
            this.stream = OUTPUT_STREAM;
            ServletResponse res = getResponse();
            this.gzipOutputStream = new GZipServletOutputStream(res.getOutputStream());
        }
        return this.gzipOutputStream;
    }

    @Override
    public PrintWriter getWriter() throws IOException {
        if (this.stream == OUTPUT_STREAM) {
            throw new IllegalStateException("OutputStream is in used, getting PrintWriter is not allowed");
        }

        if (this.printWriter == null) {
            this.stream = PRINT_WRITER;
            ServletResponse res = getResponse();
            this.gzipOutputStream = new GZipServletOutputStream(res.getOutputStream());
            OutputStreamWriter out = new OutputStreamWriter(this.gzipOutputStream, res.getCharacterEncoding());
            this.printWriter      = new PrintWriter(out);
        }
        return this.printWriter;
    }


    @Override
    public void setContentLength(int len) { }
}