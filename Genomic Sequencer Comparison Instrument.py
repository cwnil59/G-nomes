

Normal =['G','G','C','C','A','C','G','C','T','C'] #Standard Genome
#Patient =('a','g','b')
GeneticSequence = 'GGCCACGCKA'                     #Patients Genome, could be faulty
Sequencetobetested = tuple(GeneticSequence)


#print(Normal[0])
#print(Sequencetobetested[0])

def CompareIndexes():
    
    for i in range (len(Normal)):
        if (Normal[i])==(Sequencetobetested[i]):
            print("Identical Genome Sequence")
        else:
            print("Different Genome Sequence, therefore patient is deficient.")
        
    
def CompareGenomicSequence():

    print("Normal genome is" + str(Normal))
    print("Patient's genome is" + str(Sequencetobetested))

    CompareIndexes()
    
    #print(set(Sequencetobetested).difference(set(Normal)))
    
    #NewTuple = (set(Sequencetobetested).difference(set(Normal)))
    
    #PrintTuple = print(NewTuple)
    
    '''if NewTuple == set():
        print("Could not compare")
    else:
        print("Differences are" +  str(NewTuple))'''

def displayNormalSequence():
    print (Normal)


#Normal =['G','G','C','C','A','C','G','C','T','C']




#def displayPatientSequence():
    #print (Patient)


#def addpatientgeneticsequence():
    
    #GeneticSequence = 'agb'
   #NewNewTuple = tuple(GeneticSequence)
    #print(NewNewTuple)
    



#tup.index('string')


