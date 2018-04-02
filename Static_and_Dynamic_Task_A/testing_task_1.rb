require_relative('card.rb')
class CardGame


  def checkforAce(card)
    if card.value = 1 #Missing = symbol
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) #dif should be def. Also there should be a comma, to separate card1 and card2.
  if card1.value > card2.value
    return card.name  #the method name doesn't exist.
  else
    card2 #return is missing.
  end
end
end #additional end.

def self.cards_total(cards)
  total #total is not initialised with a value.
  for card in cards
    total += card.value
    return "You have a total of" + total #return value should be outside of the loop. Also 'total' should be encased with #{} and be inside the quotation marks.
  end
end
#Missing end.
