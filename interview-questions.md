# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer:
The answer to this question brings the word "Paradigm" to mind as I say that OOP is the paradigm in programming that uses classes and objects. OOP breaks down programs into reusable pieces of code that helps to make software development easier. I'm not sure of the difference between OOP and functional programming, though.

Researched answer:
I found that the term Object-Oriented was invented in 1966 by Alan Kay. Simula, created in 1965, was the first real Object-Oriented language. The power of OOP lies in the concept of messaging by sending a message to something and it figures out how to process the message or better yet, send that same message to 2 different things and each of those things deal with that message in different ways that make sense to them. This explains the concept that I've experienced thus far in programming called Polymorphism (using classes, objects, methods, variables, etc). While I haven't actually done functional programming myself, I see that it's more narrowly focused and straightforward along with relying on pure functions with certain constraints, such as excluding the use of a program's memory to keep the scopes of the program very small and self-contained. The use of OOP or functional programming seems to be based on individual preference as well as the requirements of the job at hand and there's the ongoing debate between programmers as to which style is better. An easier breakdown of the difference between the two would be that the Object-Oriented Programming approach is more like the way that humans actually think when it comes to problem solving and Functional programming is the more mathematical approach.




2. What is the difference between a Float and an Integer in Ruby?

Your answer:
If I'm not mistaken, an Integer already exists in Ruby, but a Float would have to be input into the program.

Researched answer:
This answer is a reference from my actual class lecture notes. In Ruby, only whole numbers are contained. So if 4 / 3 were typed in, the nearest whole number (1) would be returned. Instead, a float has to be introduced to the program by typing in 4.0 / 3, which would return 1.33. A float is actually a different class in Ruby.



3. Ruby has an implicit return. What does that mean?

Your answer:
An implicit return in Ruby is a built-in feature that automatically produces a return in a program without having the actual return command being written into the code. Having the implicit return reduces the amount of code that the developr has to write when programming.

Researched answer:
Having previously worked with JavaScript during my earlier learning phase of coding, I had been used to using the return keyword when writing functions. As I researched an implicit return in Ruby, I now see that using the return keyword in JavaScript is an "explicit return." In Ruby, that "implicit return" happens when the last expression of a program's execution path is a return and that return is produced without a keyword to prompt it. This is the reason why I consider implicit return to be a built-in feature of Ruby and it does indeed save a step when programming with the language.



4. What is a block in Ruby?

Your answer:
My understanding of a block in Ruby is that it's pretty much like a method because it is also a collection of functions grouped together to perform a task, such as the iteration of an array.

Researched answer:
A Ruby block is an example of an anonymous function and a block is passed to a method. The two ways that I have used to create a block during coding challenges are with do-end statements and curly braces {}. Curly braces are used for a single line block and the 'do' and 'end' keywords are used for a multi-line block. A single line block is written like so:
5.times {p 'hello'}
Here's how a multi-line block is written:
5.times do
p 'hello'
end
Both of these blocks of code will return the same output: 
"hello"
"hello"
"hello"
"hello"
"hello"



5. What is an instance variable in Ruby?

Your answer:
Instance is the key word here because an instance variable belongs to an instance of a class. Unlike a class in JavaScript where you'd use the keyword 'this' to set values, Ruby uses '@' to set values.

Researched answer:
The instance variable in Ruby is a class attribute that becomes the property of the objects created within the class. An instance variable is considered private when it's accessed within the class by using the constructor method 'initialize', but it's considered public when the variable is accessed outside of the class and that's when an accessor method such as printWidth would be used. Both the constructor method and the and the accessor method in Ruby are known as "getter methods."

## Looking Ahead: Terms for Next Week

1. PostgreSQL:
Postgres, as it is called, is the follow-up database built in the 1980s that corrected problems to an earlier database called Ingres that was built in the 1970s. SQL was an update that was added to Postgres in the 1990s, hence the name PostgresSQL. It is a free, open-source database management system. I have PostgresSQL installed on my personal computer, but I only used it for a tutorial project. So I'm looking forward to learning more about it and getting more experience with it.

2. Ruby on Rails:
Also known as 'Rails', Ruby on Rails is a server-based framework that is written in Ruby and it's used for web development and app programming on the server side of applications. Rails contains an MVC (model view controller). Model handles the data logic of the application, view handles the UI logic, and the controller acts as the connection between the model and the view. Rails is preferred by many developers because of the ease that it provides with ready-made code libraries that can generate forms, tables, menus, and more. Ruby on Rails is an open-source framework that is free of charge and other benefits include development speed, ease of updating, security, efficiency, and the support of a large community of developers who are constantly working on its improvements.

3. ORM:
Object Relational Mapper. It allows a developer to work with a database as if it were an object in a Ruby application. SQL (sequel) is an example of an ORM. The ORM provides a way for Ruby programs to use a data management technique called 'mapping' for database tables. Simply stated, the Object Relational Mapper is the connection between the Ruby program and the database.

4. Active Record:
Acive Record is the ORM (Object Relational Mapper) that Ruby on Rails uses to make changes or updates to a database.

5. Migrations:
Migrations are the way to change the schema (model) of a database and the code is considered database-independent in the sense that the application connected to the database can be moved to a different platform without restrictions. With migrations, any database modifications are written in the application code, i.e. Ruby, instead of database code such as SQL and this is what enables the application to be independent of the database.
