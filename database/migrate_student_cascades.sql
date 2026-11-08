USE e_scuela_db;

ALTER TABLE enrollments
    DROP FOREIGN KEY enrollments_ibfk_1,
    ADD CONSTRAINT enrollments_ibfk_1
        FOREIGN KEY (student_id) REFERENCES students(student_id)
        ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE grades
    DROP FOREIGN KEY grades_ibfk_1,
    ADD CONSTRAINT grades_ibfk_1
        FOREIGN KEY (student_id) REFERENCES students(student_id)
        ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE grades
    DROP FOREIGN KEY grades_ibfk_2,
    ADD CONSTRAINT grades_ibfk_2
        FOREIGN KEY (subject_id) REFERENCES subjects(id)
        ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE students
    DROP FOREIGN KEY students_ibfk_1,
    ADD CONSTRAINT students_ibfk_1
        FOREIGN KEY (user_id) REFERENCES users(id)
        ON DELETE CASCADE ON UPDATE CASCADE;
