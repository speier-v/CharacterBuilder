package edu.charactyr.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import edu.charactyr.backend.CharactyrRepository;
import edu.charactyr.backend.Feature;
import edu.charactyr.backend.FeaturesRepository;
import edu.charactyr.backend.Character;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class FeatureController {    
    private final FeaturesRepository repository;

    FeatureController(FeaturesRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/features")
    public List<Feature> getFeatures() {
        return (List<Feature>) repository.findAll();
    }

    @PostMapping("/features")
    void addFeature(@RequestBody Feature feature) {
        repository.save(feature);
    }
}

