package codeburnt.controllers;

import jdk.nashorn.internal.ir.debug.JSONWriter;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.stereotype.Controller;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

@Controller
public class HomeCtrl {
    @RequestMapping("/lime/**")
    public String index() {
        return "index";
    }
}