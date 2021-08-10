
package com.techelevator.dao;

import com.techelevator.model.User;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.springframework.jdbc.core.JdbcTemplate;

import javax.sql.DataSource;
import java.util.List;

public class JdbcUserDaoTests extends FinalCapstoneDaoTests {
    private static final User USER_A = new User(1L, "Deji", "Deji", "yes",15220);
    private static final User USER_B = new User(2L, "Eric", "Eric", "yes",15220);
    private static final User USER_C = new User(3L, "Sasan", "Sasan", "yes",15220);



    private JdbcUserDao sut;


    @Before
    public void setup() {
        DataSource dataSource = this.getDataSource();
        JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
        sut = new JdbcUserDao(jdbcTemplate);
    }

    @Test
    public void createNewUser() {
        boolean userCreated = sut.create("TEST_USER","test_password","user", 00000);
        Assert.assertTrue(userCreated);
        User user = sut.findByUsername("TEST_USER");
        Assert.assertEquals("TEST_USER", user.getUsername());
    }


    @Test
    public void getUser_returns_all_users() {
        List<User> users = sut.findAll();

        Assert.assertEquals(3,users.size());

        assertUsersMatch(USER_A, users.get(0));
        assertUsersMatch(USER_B, users.get(1));
        assertUsersMatch(USER_C,users.get(2));

    }



    private void assertUsersMatch(User expected, User actual) {
        Assert.assertEquals(expected.getAuthorities(), actual.getAuthorities());
        Assert.assertEquals(expected.getId(), actual.getId());
        Assert.assertEquals(expected.getPassword(), actual.getPassword());
        Assert.assertEquals(expected.getUsername(), actual.getUsername());
        Assert.assertEquals(expected.getZipcode(), actual.getZipcode());
    }



}
