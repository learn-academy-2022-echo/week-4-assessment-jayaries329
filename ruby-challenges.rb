# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

# Pseudo code:
# Create a method named even_check that takes in a number
# Use a conditional statement to determine whether the number is even or odd
# Print the expected output using string interpolation.

def even_check (value)
    if value % 2 == 0
        "#{value} is even."
    else
        "#{value} is odd."
        
    end
end
p even_check num3

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Pseudo code:
# Create a method that takes in a string
# Use a while statemement for iteration along with built-in methods to remove vowels from the string
# Return the expected output of strings with no vowels


def remove_vowels (string)
    string_array = string.split("")
    vowels = "aeiou"
    i = 0
    while i < string.length
        if vowels.include?(string[i])
        string_array[i] = ""
        end
        i +=1
    end
     new_string = string_array.join
     new_string = new_string.gsub(/\+/,"")
    return new_string
end

p remove_vowels beatles_album3

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# Pseudo code:
# Create a method named palindrome that takes in a string
# Use a conditional statement for iteration along with a method to see if the string is a palindrome.
# Return the expected output using string interpolation

def palindrome string
    if string == string.reverse
        true
    else
        "#{string} is not a palindrome" 
    end
end
p palindrome palindrome_tester1