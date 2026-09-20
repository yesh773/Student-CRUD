package com.example.CRUD.Repo;

import com.example.CRUD.Entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository  extends JpaRepository<Student,Long> {
    boolean existsByEmail(String email);
}
