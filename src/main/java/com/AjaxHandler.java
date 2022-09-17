package com.example.messagingstompwebsocket;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

    @Controller
    public class AjaxHandler implements ErrorController {

        @RequestMapping(value = "/", method = RequestMethod.POST)
        @ResponseBody
        @JsonIgnoreProperties(ignoreUnknown = true)
        public String ajax(@RequestBody Map<String, String> params, HttpServletRequest httpServletRequest) {
            if (!params.get("params").strip().isEmpty()) Chat.name = params.get("params");
            else return "error!";
            return "succ!";
        }
    }
