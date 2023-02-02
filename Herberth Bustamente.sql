SELECT DISTINCT race 
FROM hero_information 
WHERE race IS NOT NULL;


SELECT hero_information.name, height 
FROM hero_information 
WHERE height < 200;


SELECT hero_information.name, publisher_name
FROM hero_information, publisher 
WHERE hero_information.publisher_id = publisher.publisher_id 
AND height < 200 
AND race NOT LIKE 'Human%';


SELECT COUNT(*)
FROM hero_information 
WHERE hair_color = 'Black';


SELECT (
	SELECT COUNT(*)
	FROM publisher, hero_information, gender
	WHERE publisher.publisher_id = hero_information.publisher_id
	AND gender.gender_id = hero_information.gender_id
	AND gender.name = 'Male'
	) + (
	SELECT COUNT(*)
	FROM publisher, hero_information, gender
	WHERE publisher.publisher_id = hero_information.publisher_id
	AND gender.gender_id = hero_information.gender_id
	AND gender.name = 'Female'
	);