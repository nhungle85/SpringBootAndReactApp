package com.nle.microservice.todolistbackend.dto;

import com.nle.microservice.todolistbackend.entity.TodoEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import javax.persistence.Column;
import java.sql.Date;

@Data
@Builder
@AllArgsConstructor
public class TodoDto {
    private long id;
    private String description;
    private boolean status;
    private Date targetDate;

    public static TodoDto fromEntity(TodoEntity entity) {
        return TodoDto.builder().id(entity.getId())
                .description(entity.getDescription())
                .status(entity.isStatus())
                .targetDate(entity.getTargetDate())
                .build();
    }
}
