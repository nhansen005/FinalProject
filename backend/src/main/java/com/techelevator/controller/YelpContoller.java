package com.techelevator.controller;

import com.techelevator.model.Business;
import com.techelevator.services.YelpService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@PreAuthorize("isAuthenticated()")
public class YelpContoller {

    private YelpService yelpService;

    public YelpContoller(YelpService yelpService) {
        this.yelpService = yelpService;
    }

    @RequestMapping(path = "/businesses", method = RequestMethod.GET)
    public Business[] getBusinesses(@RequestHeader String zipCode, @RequestHeader String category, @RequestHeader String radius) {
        List<Business> businessList = null;
        if(radius.equals("")) {
            businessList = yelpService.getBusinessesNoRadius(zipCode, category);
        } else {
            businessList = yelpService.getBusinessesWithRadius(zipCode, category, radius);
        }
        Business[] businessArray = new Business[businessList.size()];
        return businessList.toArray(businessArray);
    }

    @RequestMapping(path = "/businesses/{id}", method = RequestMethod.GET)
    public Business getBusinessDetails(@PathVariable String id) {
        Business business = yelpService.getBusinessByID(id);
        return business;
    }
}