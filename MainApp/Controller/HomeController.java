package com.MainApp.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.MainApp.Entity.Students;
import com.MainApp.Service.StudentService;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "http://localhost:3000")  // Allow requests from React app
public class HomeController {
	
	@Autowired
	private StudentService studentService;
	
	// Create User (POST Request)
    @PostMapping("/create")
    public Students createUser(@RequestBody Students student) {
        return studentService.createUser(student);
    } 
    
    
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Students loginData) {
        boolean isValidUser = studentService.login(loginData.getRollno(), loginData.getPassword());

        if (isValidUser) {
            // If login is successful, return success response
            return ResponseEntity.ok().body("{\"success\": true}");
        } else {
            // If login fails, return error response
            return ResponseEntity.status(401).body("{\"success\": false, \"message\": \"Invalid RollNo or Password\"}");
        }
    }

}
