package com.MainApp.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MainApp.Entity.Students;
import com.MainApp.Repository.StudentRepository;

@Service
public class StudentService {
	
	@Autowired
	private StudentRepository studentRepository;
	
	public Students createUser(Students student) {
        return studentRepository.save(student);
    }
	
	public boolean login(long rollno, String password) {
        Students student = studentRepository.findByRollnoAndPassword(rollno, password);
        return student != null;  // Return true if student exists, false otherwise
    }

}
