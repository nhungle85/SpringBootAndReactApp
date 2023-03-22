package com.nle.microservice.todolistbackend.controller;

import com.nle.microservice.todolistbackend.dto.TodoDto;
import com.nle.microservice.todolistbackend.service.TodoListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/todo")
public class TodoListController {

    @Autowired
    private TodoListService service;

    @GetMapping("/basicauth")
    public String basicAuth() {
        return "success";
    }

    @GetMapping("/sayHello/{param}")
    public String sayHello(@PathVariable(required = false) String param) {
        return String.format("This is Todo list from backend, %s", param);
    }

    @GetMapping("/getAll")
    public List<TodoDto> getAllTodoList() {
        return service.getAllTodoList();
    }

    @GetMapping("/{id}")
    public TodoDto getTodoById(@PathVariable(required = true) long id) {
        return service.findById(id);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable(required = true) long id) {
        service.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
