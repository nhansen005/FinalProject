package com.techelevator.controller;

import com.techelevator.dao.BusinessDAO;
import com.techelevator.model.Business;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;
import java.util.List;


@RestController
@CrossOrigin
@PreAuthorize("isAuthenticated()")
public class BusinessController {

    private BusinessDAO businessDAO;

    public BusinessController(BusinessDAO businessDAO) {
        this.businessDAO = businessDAO;
    }

    @ResponseStatus(HttpStatus.CREATED)
    @RequestMapping(path = "/favorites", method = RequestMethod.GET)
    public List<Business> getFavoriteBusinesses(Principal principal) {
        return businessDAO.getFavorites(principal.getName());
    }

    @ResponseStatus(HttpStatus.CREATED)
    @RequestMapping(path = "/favorites/{id}", method = RequestMethod.POST)
    public String addToFavorites(@Valid @PathVariable("id") String businessID, Principal principal) {
        String response = "";
        int result = businessDAO.addToFavorites(businessID, principal.getName());
        if (result == 1) {
            response = "Added to Favorites!";
        } else {
            response = "Request Denied!";
        }
        return response;
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @RequestMapping(path = "/favorites/{id}", method = RequestMethod.DELETE)
    public String deleteFavoriteBusiness(@Valid @PathVariable("id") String businessID, Principal principal) {
        String response = "";
        int result = businessDAO.deleteFromFavorites(businessID, principal.getName());
        if (result == 1) {
            response = "Removed from Favorites.";
        } else {
            response = "Request Denied";
        }
        return response;
    }





}
