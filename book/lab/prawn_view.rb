require 'prawn'

class Greeter
  include Prawn::View

  def initialize(name)
    @name = name
    set_font
  end

  def set_font
    file = '/Users/admejiar/Library/Fonts/TwitterColorEmoji.ttf'
    font_families["emoji"] = {
      normal: {file: file, font: 'emoji'}
    }
  end

  def say_hello
    text "Hello, #{@name}!"
    text "Hello emoji 😊🤯✅↪️🐢💀⏱🚀", fallback_fonts: ["emoji"]
  end

  def say_goodbye
    font('Courier') do
      text "Goodbye, #{@name}!"
    end
  end
end

greeter = Greeter.new('Adrian')

greeter.say_hello
greeter.say_goodbye

greeter.save_as('greetings.pdf')

# https://github.com/mitre-cyber-academy/ctf-scoreboard/commit/e4c46d126f1578ee950a01604801f2e987491ccd
