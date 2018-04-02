require_relative ('card')
require_relative ('testing_task_1')
require ('minitest/autorun')

class TestCard < MiniTest::Test

  def setup
    @card_one = Card.new("Spades", 1)
    @card_four = Card.new("Club", 4)
    @cards = [@card_one, @card_four]
    @card_game = CardGame.new
  end

  def test_checkforAce__true
    assert_equal(true, @card_game.checkforAce(@card_one))
  end

  def test_checkforAce__false
    assert_equal(false, @card_game.checkforAce(@card_four))
  end

  def test_highest_card
    assert_equal(@card_four, @card_game.highest_card(@card_one, @card_four))
  end

  def test_cards_total
    assert_equal("You have a total of 5", CardGame.cards_total(@cards))
  end

end
