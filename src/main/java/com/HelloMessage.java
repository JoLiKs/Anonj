package com.example.messagingstompwebsocket;

public class HelloMessage {
    private String name;
    private String userName;

    public HelloMessage() {
    }

    public HelloMessage(String name) {
        this.name = name;
    }

    public String getMessage() {
        return name;
    }
    public String getName() {
        return userName;
    }
    public void setName(String name) {
        this.name = name;
    }
    public void setUserName(String userName) {
        this.userName = userName;
    }
}
