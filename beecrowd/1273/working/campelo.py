resp = []

def solutionPrint():
    for word in resp:
        if word == "end":
            print()
        else:
            print(f'{"" :{word}}')
            
while True:
    try:
        n = int(input())
        if n == 0:
            solutionPrint()
            break
        length = 0
        words = []
        for i in range(n):
            word = input()
            wordLen = len(word) + 1
            
            if wordLen > length:
                length = wordLen
                
            words.append(word)
            
        for word in words:
            resp.append(word.rjust(length, " "))
        
        resp.append("end")
        
    except EOFError:
        break