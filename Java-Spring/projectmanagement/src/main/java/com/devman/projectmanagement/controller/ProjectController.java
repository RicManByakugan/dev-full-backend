package com.devman.projectmanagement.controller;

import com.devman.projectmanagement.models.Project;
import com.devman.projectmanagement.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/projets")
public class ProjectController {
    @Autowired
    private ProjectService projectService;

    @GetMapping("/list")
    public List<Project> getProject(){
        return this.projectService.getAllProject();
    }
}
