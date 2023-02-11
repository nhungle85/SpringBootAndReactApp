package com.nle.microservice.todolistbackend.reposistory;

import com.nle.microservice.todolistbackend.entity.TodoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoListReposistory extends JpaRepository<TodoEntity, Long> {
}
