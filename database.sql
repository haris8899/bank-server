Create database bank_data;

--Creating tables
CREATE TABLE app_users(
    user_id varchar(255) Primary Key,
    user_password varchar(255),
    email_address varchar(255),
    phone_number varchar(255),
    creation_date timestamp(6),
    last_login_date timestamp(6),
    user_status varchar(255),
    last_update_date timestamp(6)
);

CREATE TABLE image_categories(
    auto_id Serial Primary Key,
    image_category_id varchar(255),
    description varchar(255),
    location_type_id varchar(255)
)

CREATE TABLE location_images(
    image_id Serial Primary Key,
    created_at timestamp(6),
    location_id varchar(255),
    image_category_id varchar(255),
    image_path varchar(255)
)

--insert into tables
--app_users
insert into "app_users" ("creation_date", "email_address", "last_login_date", "last_update_date", "phone_number", "user_status", "user_id", "user_password") values (NULL, NULL, NULL, NULL, NULL, '0', 'doadmin', 'doadmin');
insert into "app_users" ("creation_date", "email_address", "last_login_date", "last_update_date", "phone_number", "user_status", "user_id", "user_password") values (NULL, NULL, NULL, NULL, NULL, '0', 'scott', 'tiger');
insert into "app_users" ("creation_date", "email_address", "last_login_date", "last_update_date", "phone_number", "user_status", "user_id", "user_password") values (NULL, NULL, NULL, NULL, NULL, '0', 'sa', 'sa');
