package com.MainApp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.MainApp.Entity.Students;

@Repository
public interface StudentRepository extends JpaRepository<Students, Long>{

	 Students findByRollnoAndPassword(long rollno, String password);
}
