package com.example.CRUD.Service;
import com.example.CRUD.Entity.Student;
import com.example.CRUD.Exception.StudentNotFoundException;
import com.example.CRUD.Payload.StudentRequest;
import com.example.CRUD.Payload.StudentResponse;
import com.example.CRUD.Repo.StudentRepository;
import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;
import java.util.List;
@Service
@RequiredArgsConstructor
public class StudentService {

    private final StudentRepository studentRepository;

    // CREATE
    public StudentResponse createStudent(StudentRequest request) {

        if (studentRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        Student student = Student.builder()
                .name(request.getName())
                .email(request.getEmail())
                .course(request.getCourse())
                .build();

        Student savedStudent =
                studentRepository.save(student);

        return mapToResponse(savedStudent);
    }
    // READ ALL
    public List<StudentResponse> getAllStudents() {

        return studentRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .toList();
    }


    // READ ONE
    public StudentResponse getStudentById(Long id) {

        Student student = studentRepository.findById(id)
                .orElseThrow(() ->
                        new StudentNotFoundException(id)
                );

        return mapToResponse(student);
    }


    // UPDATE
    public StudentResponse updateStudent(
            Long id,
            StudentRequest request) {

        Student student = studentRepository.findById(id)
                .orElseThrow(() ->
                        new StudentNotFoundException(id)
                );

        student.setName(request.getName());
        student.setEmail(request.getEmail());
        student.setCourse(request.getCourse());

        Student updatedStudent =
                studentRepository.save(student);
        return mapToResponse(updatedStudent);
    }


    // DELETE
    public void deleteStudent(Long id) {

        if (!studentRepository.existsById(id)) {
            throw new StudentNotFoundException(id);
        }

        studentRepository.deleteById(id);
    }

    // ENTITY → DTO
    private StudentResponse mapToResponse(
            Student student) {

        return StudentResponse.builder()
                .id(student.getId()).name(student.getName())
                .email(student.getEmail()).course(student.getCourse())
                .build();
    }
}
