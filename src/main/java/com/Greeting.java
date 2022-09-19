package com.example.messagingstompwebsocket;

import com.fasterxml.jackson.annotation.JsonFormat;
import netscape.javascript.JSObject;

import java.util.HashMap;

public class Greeting {
    private String content;
    private String name;

    public Greeting() {
    }

    public Greeting(String name, String content) {
        this.content = content;
        this.name = name;
    }
    public Greeting(String content) {
        this.content = content;
    }
    public String[] getContent() {
    String[] message = {name, content};
        return message;
    }
}
