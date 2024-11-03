package com.devman.projectmanagement.services;

import com.devman.projectmanagement.models.Project;
import com.devman.projectmanagement.repositories.ProjectRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {
    private final ProjectRepository projectRepository;

    public ProjectService(ProjectRepository projectRepository){
        this.projectRepository = projectRepository;
    }

    public List<Project> getAllProject(){
        return this.projectRepository.findAll();
    }
}
