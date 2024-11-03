package com.devman.projectmanagement.controller;

import com.devman.projectmanagement.models.Project;
import com.devman.projectmanagement.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/api/projet")
public class ProjectController {
    @Autowired
    private ProjectService projectService;

    @GetMapping("/list")
    public List<Project> getProject(){
        return this.projectService.getAllProject();
    }
}
