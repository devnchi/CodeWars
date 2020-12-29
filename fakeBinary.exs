// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.


defmodule FakeBinary do
  def generate(str) do
    str |> String.replace(~r/[0-4]/, "0") |> String.replace(~r/[5-9]/, "1")
  end
end


defmodule FakeBinary do
  def generate(str) do
    below = ["0", "1", "2", "3", "4"]
    above = ["5", "6", "7", "8", "9"]
    
    str |> String.replace(below, "0") |> String.replace(above, "1")
  end
end


defmodule FakeBinary do
  def generate(str), do:
    str
    |> String.graphemes
    |> Enum.map(fn (x) -> if x < "5", do: "0", else: "1" end)
    |> Enum.join("")
    
end


defmodule FakeBinary do
  def generate(str) do
    str
    |> String.codepoints()
    |> Enum.map(&(
      cond do 
        &1 < "5" -> "0"
        &1 >= "5" -> "1"
      end))
    |> Enum.join("")
  end
end
