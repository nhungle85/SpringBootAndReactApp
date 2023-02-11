package com.nle.microservice.todolistbackend.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Date;

@Data
@Table(name = "TODO_LIST")
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TodoEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "No_Id")
    private long id;

    @Column(length = 255, nullable = false)
    private String description;
    private boolean status;

    @Column(name = "target_date")
    private Date targetDate;
}
