package com.devman.projectmanagement.services;

import com.devman.projectmanagement.models.Publication;
import com.devman.projectmanagement.repositories.PublicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PublicationService {
    private final PublicationRepository publicationRepository;

    public PublicationService(PublicationRepository publicationRepository){
        this.publicationRepository = publicationRepository;
    }

    public List<Publication> getAllPublication(){
        return this.publicationRepository.findAll();
    }
    
}
