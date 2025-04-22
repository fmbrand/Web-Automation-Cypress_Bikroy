Feature: Open Nextlab POS Website Item Module


Background: Open nextlab Website And Login
     Given User Open nextlab Website 
    #  When Click on the subtitle
     And Enter the user login credentials
      
     Then Click the Login Button
     Then Click on Hambergger menu

Scenario: Verify that All Item List show properly
    When Click on the Items dropdown
    And Click on the All Items
    And Check that all table column are show properly
    # And Check that All Items page show properly  
    # Then Check that Filter option are show on the top of the list.  

    When Enter that Item Name  
    And Click on Filter button  
    Then Check that given item are show properly  

    When Enter the Item Code  
    And Click on the Filter button  
    Then Check that item shows properly  

    When Select a product brand from Item Brand dropdown  
    And Click on the Filter button  
    Then Check that items show properly  

    When Select a product Group from Item Group dropdown  
    And Click on the Filter button  
    Then Check that items show properly  

    When Select a product Type from Item Type dropdown  
    And Click on the Filter button  
    Then Check that items show properly  

    When Select a product Unit from Item Unit dropdown  
    And Click on the Filter button  
    Then Check that items show properly  

# Scenario: Verify that the Client Admin is not able to add a new User without UserName
#     When Click on side Menu
#     And Click on Setup
#     And Click on User Tab
#     And Click on new Icon
#     And Enter all details without UserName
#         | Employee_Id           | 12345              |
#         | Username              | cloudadmin         |
#         | First_Name            | Cloud              |
#         | Last_Name             | Admin              | 
#         | Email                 | cladk@ey.bd        |
#         | Password              | 12345              |  
#         | Phone_Number          | 8371261816         |

#     Then Setup Date of Birth 
#     Then Click on Save button
#     Then Check that The username field is required


# Scenario: Verify that the Client Admin is not able to add a new User without First Name
#     When Click on side Menu
#     And Click on Setup
#     And Click on User Tab
#     And Click on new Icon
#     And Enter all details without First Name
#         | Employee_Id           | 12345              |
#         | Username              | cloudadmin         |
#         | First_Name            | Cloud              |
#         | Last_Name             | Admin              | 
#         | Email                 | cladk@ey.bd        |
#         | Password              | 12345              |  
#         | Phone_Number          | 8371261816         |

#     Then Setup Date of Birth 
#     Then Click on Save button
#     Then Check that The firstname field is required

# Scenario: Verify that the Client Admin is not able to add a new User without Select Last Name
#     When Click on side Menu
#     And Click on Setup
#     And Click on User Tab
#     And Click on new Icon
#     And Enter all details without Last Name
#         | Employee_Id           | 12345              |
#         | Username              | cloudadmin         |
#         | First_Name            | Cloud              |
#         | Last_Name             | Admin              | 
#         | Email                 | cladk@ey.bd        |
#         | Password              | 12345              |  
#         | Phone_Number          | 8371261816         |

#     Then Setup Date of Birth 
#     Then Click on Save button
#     Then Check that The lastname field is required


# Scenario: Verify that the Client Admin is not able to add a new User without Email
#     When Click on side Menu
#     And Click on Setup
#     And Click on User Tab
#     And Click on new Icon
#     And Enter all details without email
#         | Employee_Id           | 12345              |
#         | Username              | cloudadmin         |
#         | First_Name            | Cloud              |
#         | Last_Name             | Admin              | 
#         | Email                 | cladk@ey.bd        |
#         | Password              | 12345              |  
#         | Phone_Number          | 8371261816         |

#     Then Setup Date of Birth 
#     Then Click on Save button
#     Then Check that The email field is required








# Scenario: Verify that the Super Admin is not able to add a new User without Password
#     When Click on side Menu
#     And Click on Setup
#     And Click on User Tab
#     And Click on new Icon
#     And Enter all details without password
#         | Employee_Id           | 12345              |
#         | Username              | cloudadmin         |
#         | First_Name            | Cloud              |
#         | Last_Name             | Admin              | 
#         | Email                 | cladk@ey.bd        |
#         | Password              | 12345              |  
#         | Phone_Number          | 8371261816         |

#     Then Setup Date of Birth 
#     Then Click on Save button
#     Then Check that The password field is required


# Scenario: Verify that the Super Admin is not able to add a new User without Phone Number
#     When Click on side Menu
#     And Click on Setup
#     And Click on User Tab
#     And Click on new Icon
#     And Enter all details without Phone Number
#         | Employee_Id           | 12345              |
#         | Username              | cloudadmin         |
#         | First_Name            | Cloud              |
#         | Last_Name             | Admin              | 
#         | Email                 | cladk@ey.bd        |
#         | Password              | 12345              |  
#         | Phone_Number          | 8371261816         |

#     Then Setup Date of Birth 
#     Then Click on Save button
#     Then Check that The Phone Number field is required

# Scenario: Verify that the Super Admin is not able to add a new User without Date of Birth
#     When Click on side Menu
#     And Click on Setup
#     And Click on User Tab
#     And Click on new Icon
#     And Enter all details without Date of Birth
#         | Employee_Id           | 12345              |
#         | Username              | cloudadmin         |
#         | First_Name            | Cloud              |
#         | Last_Name             | Admin              | 
#         | Email                 | cladk@ey.bd        |
#         | Password              | 12345              |  
#         | Phone_Number          | 8371261816         |


#     Then Click on Save button
#     Then Check that The Date of Birth field is required

# Scenario: Verify that the Super Admin is able to add a new User Role
#     When Click on side Menu
#     And Click on Setup
#     And Click on User Tab
#     Then Click on User Role
#     Then Click on new Icon
#     Then Click on user and Select user
#     Then Click on role and Select role
#     Then Click on Save button    


# Scenario: Verify that the Super Admin is not able to add a new User Role without User
#     When Click on side Menu
#     And Click on Setup
#     And Click on User Tab
#     Then Click on User Role
#     Then Click on new Icon
#     Then Click on user field
#     Then Click on role and Select role
#     Then Click on Save button
#     Then Check that the user field is required

# Scenario: Verify that the Super Admin is not able to add a new User without Role
#     When Click on side Menu
#     And Click on Setup
#     And Click on User Tab
#     Then Click on User Role
#     Then Click on new Icon
#     Then Click on user and Select user
#     Then Click on role field
#     Then Click on Save button
#     Then Check that the role field is required


