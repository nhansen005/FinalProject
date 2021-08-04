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
    public Business[] getBusinesses(@RequestHeader String zipcCode, @RequestHeader String category, @RequestHeader String radius) {
        List<Business> businessList = null;
        if(radius.equals("")) {
            businessList = yelpService.getBusinessesNoRadius(zipcCode, category);
        } else {
            businessList = yelpService.getBusinessesWithRadius(zipcCode, category, radius);
        }
        Business[] businessArray = new Business[businessList.size()];
        return businessList.toArray(businessArray);
    }
}
