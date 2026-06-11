package com.example.sample;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {

        if (request.getUsername().equals("admin")
                && request.getPassword().equals("123")) {

            return "SUCCESS";
        }

        return "FAIL";
    }
}