student_grades = {
    "Alice": [88, 92, 100],
    "Bob": [75, 78, 80],
    "Charlie": [92, 90, 85],
    "Dana": [83, 88, 92],
    "Eli": [78, 80, 72]
}

student_averages = {}
for student, grades in student_grades.items(): 
    student_averages[student] = sum(grades) / len(grades)

print(student_averages)

student_letter_grades = {}
for student, average in student_averages.items():
    if average >= 90:
        student_letter_grades[student] = 'A'
    elif average >= 80:
        student_letter_grades[student] = 'B'
    elif average >= 70:
        student_letter_grades[student] = 'C'
    elif average >= 60:
        student_letter_grades[student] = 'D'
    else:
        student_letter_grades[student] = 'F'

print(student_letter_grades)

class_average = {}
for student_average in student_averages.values():
    class_average = sum(student_averages.values()) / len(student_averages)

print("Class Average:", class_average)

final_grades ={}

for student in student_grades:
    print(student, student_averages[student], student_letter_grades[student])