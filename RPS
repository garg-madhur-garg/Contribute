"""
Implements the game of Rock-Paper-Scissors!

History:
This classic game dates back to the Han Dinesty, over 2200 years ago.
The First International Rock-Paper-Scissors Programming Competition 
was held in 1999 and was won by a team called "Iocaine Powder"

The Game:
Each player choses a move (simultaneously) from the choices:
rock, paper or scissors. 
If they chose the same move the game is a tie. Otherwise:
rock beats scissors
scissors beats paper
paper beats rock.

In this program a human plays against an AI. The AI choses randomly
(we promise). The game is repeated N_GAMES times and the human gets
a total score. Each win is worth +1 points, each loss is worth -1
"""
import random

N_GAMES = 3

def main():
    print_welcome()
    total_score = 0
    for i in range(N_GAMES):
        ai_move = get_ai_move()
        human_move = get_human_move()
        winner = get_winner(ai_move, human_move)
        total = updated_score(winner, total_score) 
        print("ai move was",ai_move)
        print("winner is",winner)
        print("")
    print("total score",total)

def updated_score(winner, total_score):
    if winner=='human':
        total_score +=1
    if winner=='ai':
        total_score -=1
    if winner=='tie':
        total_score +=0
    return total_score

def get_winner(ai_move, human_move):
    if ai_move==human_move:
        return 'tie'
    if ai_move=='scissors':
        if human_move=='rock':
            return 'human'
        return 'ai'
    if ai_move=='paper':
        if human_move=='scissors':
            return 'human'
    if ai_move=='rock':
        if human_move=='paper':
            return 'human'
        return 'ai'

    return 'tie'


def get_ai_move():
    choice = random.choice(['rock','paper','scissors'])
    return choice

def get_human_move():
    while True:
        human_move = input('Enter your move: ')
        if is_valid_move(human_move):
            return human_move
        print('invalid move')


def is_valid_move(human_move):
    """
    >>> is_valid_move('rock')
    True
    >>> is_valid_move('paper')
    True
    >>> is_valid_move('unicorn')
    False
    """
    if human_move=='paper':
        return True
    if human_move=='rock':
        return True
    if human_move=='scissors':
        return True
    return False






def print_welcome():
    print('Welcome to Rock Paper Scissors')
    print('You will play '+str(N_GAMES)+' games against the AI')
    print('rock beats scissors')
    print('scissors beats paper')
    print('paper beats rock')
    print('----------------------------------------------')
    print('')

if __name__ == '__main__':
    main()
