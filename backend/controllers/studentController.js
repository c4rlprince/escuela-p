const pool = require('../config/db');

// @desc    Get all students
// @route   GET /api/students
exports.getAllStudents = async (req, res) => {
    try {
        const [students] = await pool.query('SELECT * FROM students');
        res.status(200).json(students);
    } catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).json({ message: 'Server error while fetching students.' });
    }
};

// @desc    Get a single student by ID
// @route   GET /api/students/:id
exports.getStudentById = async (req, res) => {
    try {
        const studentId = req.params.id;
        const [student] = await pool.query('SELECT * FROM students WHERE student_id = ?', [studentId]);
        
        if (student.length === 0) {
            return res.status(404).json({ message: 'Student not found.' });
        }
        
        res.status(200).json(student[0]);
    } catch (error) {
        console.error('Error fetching student:', error);
        res.status(500).json({ message: 'Server error while fetching student.' });
    }
};

// @desc    Delete a student and rely on foreign-key cascades for related records
// @route   DELETE /api/students/:id
exports.deleteStudent = async (req, res) => {
    try {
        const [result] = await pool.execute(
            'DELETE FROM students WHERE student_id = ?',
            [req.params.id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Student not found in the database.' });
        }

        return res.status(200).json({ message: 'Student and related records deleted.' });
    } catch (error) {
        console.error('Error deleting student:', error);
        return res.status(500).json({ message: 'Could not delete student from the database.' });
    }
};