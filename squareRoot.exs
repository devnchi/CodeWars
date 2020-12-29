defmodule Math do
  def square?(n) when n < 0, do: false
  def square?(n), do: :math.sqrt(n) == round(:math.sqrt(n))
end

defmodule Math do
  def square?(n) when n < 0, do: false
  def square?(n), do: trunc(:math.sqrt(n)) == :math.sqrt(n)
end
