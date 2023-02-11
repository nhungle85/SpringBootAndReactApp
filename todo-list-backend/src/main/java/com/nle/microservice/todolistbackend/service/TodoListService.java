package com.nle.microservice.todolistbackend.service;

import com.nle.microservice.todolistbackend.dto.TodoDto;
import com.nle.microservice.todolistbackend.reposistory.TodoListReposistory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TodoListService {
    @Autowired
    private TodoListReposistory reposistory;

    public List<TodoDto> getAllTodoList() {
        return reposistory.findAll().stream().map(TodoDto::fromEntity).collect(Collectors.toList());
    }

}
