package com.example.CRUD.Controller;

import com.example.CRUD.Payload.StudentRequest;
import com.example.CRUD.Payload.StudentResponse;
import com.example.CRUD.Service.StudentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/students")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class StudentController {

    private final StudentService studentService;


    // CREATE
    @PostMapping
    public ResponseEntity<StudentResponse> createStudent(
            @Valid @RequestBody StudentRequest request) {

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(studentService.createStudent(request));
    }


    // READ ALL
    @GetMapping
    public ResponseEntity<List<StudentResponse>>
    getAllStudents() {

        return ResponseEntity.ok(
                studentService.getAllStudents()
        );
    }


    // READ ONE
    @GetMapping("/{id}")
    public ResponseEntity<StudentResponse>
    getStudentById(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                studentService.getStudentById(id)
        );
    }


    // UPDATE
    @PutMapping("/{id}")
    public ResponseEntity<StudentResponse>
    updateStudent(
            @PathVariable Long id,
            @Valid @RequestBody StudentRequest request) {

        return ResponseEntity.ok(
                studentService.updateStudent(id, request)
        );
    }


    // DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStudent(
            @PathVariable Long id) {

        studentService.deleteStudent(id);

        return ResponseEntity.noContent().build();
    }
}
