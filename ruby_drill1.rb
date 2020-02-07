# class Car
# def accele
# puts("アクセルを踏みました¥n")
# end
# end

# class Soarer < Car
# def accele
# super
# puts("加速しました¥n")
# end
# end

# soarer = Soarer.new
# soarer.accele

# p "Hello, #{ARGV[0]}"
# p "Hello, #{ARGV[1]}"

# # def sayHi(name)
# #   puts "hi! I am #{name}"
# # end
# # sayHi("horii!")

# # printf('商品情報:カテゴリー%s 型番%d','bag',10111)

# # p printf("明日、%sの最高気温は%d度です","サムライ村",33)
# # count = 0
# # loop {
# #   if count == 3
# #     break
# #   end
# #   puts("ループしている")
# #   count += 1
# # }
# a ="foo"
# p a.object_id
# b ="bar"
# p b.object_id
# p(a.equal?(b))
# a ="foo"
# p object_id
# a = b
# p object_id
# p(a.equal?(b))

# elements = [[1, 4], [2, 3], [3, 6]]
#   puts "hi! #{name}"
# end
  
#  sayHi("taguchi")
# printf('商品情報：カテゴリー %s 型番 %d',"bag",10111)
# p sprintf("明日、%sの最高気温は%d度です。","サムライ村",33)
# class Add
#   def addition(a, b, c, d, e)
#   puts a + b + c + d + e
#   end
# end
# add = Add.new()
 
# Add.addition(1,2,3,4,5)

# <p>jQueryの練習</p>
# name = "TAGUCHI"
# name = gets

# puts "hello #{name}"
# puts "hello #{name} again!"

# class User
#   def initialize(name)
#     @name = name
#   end
#   def sayHi
#     puts "hi! i am #{@name}"
#   end
# end

# tom = User.new("Tom")
# tom.sayHi

# def sayHi(name)
# 	puts "hi! #{name}"
# end

# sayHi("ko!")

# printf("商品情報: カテゴリー:%s 型番:%d","bag",1011)
# p printf("明日、%sの最高気温は%d度です。","サムライ村",33)

# puts"id: %05d, rate: %10.2f" %[355,3.28]

# def sayHi(name = "Tom")
#   puts "hi! #{name}"
# end  
# sayHi("ko")
# sayHi("")

# name = "田中"
# def test
#   name = "佐藤"
#   puts name
# end
# test()
# test()
# test()
# puts name
# def test
#   begin
#     puts name
#   rescue
#     puts "nameは未定義"
#   end
#   name = "佐藤"
#   puts name
# end
# test()
# test()
# characters = ["a", "b", "c", "d"]
# characters.each do |c|
#   puts c
# end
# puts c
#下記もう一度説明してほしい！
# results = []
# numbers = [1, 2, 3, 4, 5]
# numbers.each do |h|
#   results.push h**2
# end

#
# puts "id: %05d, rate: %10.2f" %[355,3.289]
# puts "id: %05d, rate: %10.2f" %[355,3.289]
# ary = ["ruby", "html", "javascript", "rails"]
# ary.each do |a|
#   puts a
#   puts a.upcase
# # end
# ary = ["Ruby", "HTML", "JavaScript", "Rails"]
# puts ary.collect{|item|item.upcase}

# 1.step(10) {|i| puts i }
# 10.step(100, 10) {|i| puts i}
# 10.step(2, -1) {|i| puts i}
# # ３．上の出力結果は？
# 10.step(-10, -2) {|i| puts i}
# # ４．上の出力結果は？
# -100.step(0, 10) {|i| puts i }
# val = 1
# while val < 5 do
#   puts val
#   val += 1
# end
# // "id: 00355, rate: 3.28"
# Printf("id: %05d, rate: %10.2f" % [355, 3.284])

# ary = ["Ruby", "HTML", "JavaScript", "Rails"]
# p ary.map{|item|item.upcase}
# str = <<EOS
# Ruby
# Ruby
# Ruby
# Ruby
# EOS
# puts(str.gsub(/Ruby/, "JavaScript"))
# ary = ["Ruby", "HTML", "JavaScript", "Rails"]
# ary.map{|item|puts item.upcase.to_a}
# x = 50
# y = "3"
# puts(x + y.to_i)
# puts(x.to_s + y)
# puts(x + y.to_f)
# for i in 1..5
#   p i
# end
# val = 1
# while <= 10 do
#   p val
#   val += 1
# end

# for val in 1..10
#   p val
# end
# ary = [1,2, 3]
# p ary.inject{|result, item|result + item}def c(k)


# ary = [
# [1, 2, 3, 4, 5],
# [10, 20, 30, 40, 50],
# [100, 200, 300, 400, 500],
# ]
# p ary[0][0]
# p ary[1][2]
# p ary[2][4]
# hash = {:hash => {:foo => 23, :bar => 42}}
# exit
# class Car
#   attr_reader :name, :color
#   def initialize(name, color)
#   @name = name
#   @color = color
#   end
#   end
  
#   my_car = Car.new("プリウス", "白")
# #   puts my_car.name
# hash = {:key1 => 1, :key2 => 2, :key3 => 3}
# p hash.value?(1)
# p hash.value?(10)
# puts "id: %05d, rate: %10.2f" %[355,3.284]
# # # name = "TAGUCHI"
# # # # elements = [[1, 4], [2, 3], [3, 6]]
# module Greet
# class Greet
# module Greet
#   def say
#   puts "Hello"
#   end
# end
  
#   # obj = Object.new
#   # obj = Greet.new
#   obj = Object.new
#   # obj.extend Greet
#   # obj.extend Greet
# # # # # # # #   obj.say
ary = Array.new(3,"Ruby")
p ary #=> ["Ruby", "Ruby", "Ruby"]
p ary[0].equal?(ary[1]) #=> true
p ary[1].equal?(ary[2]) #=> true
p ary[0].equal?(ary[2]) #=> true
p ary[0].object_id
p ary[1].object_id
p ary[2].object_id