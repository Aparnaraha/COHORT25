


Algorithm HuffmanCoding(data):
    1. Create a frequency table for the characters in the data
        For each character in data:
            Count how often each character appears
    
    2. Create a priority queue (min-heap) to store nodes
        For each character and its frequency:
            Create a node with the character and its frequency
            Insert the node into the priority queue
    
    3. Build the Huffman Tree
        While the priority queue has more than one node:
            a. Extract the two nodes with the smallest frequencies
            b. Create a new internal node with the sum of the two frequencies
               Set the two nodes as the left and right children of the new node
            c. Insert the new internal node back into the priority queue
    
    4. Generate Huffman Codes
        Initialize an empty dictionary for Huffman codes
        Traverse the Huffman tree from the root:
            For each leaf node:
                Assign the path from root to the leaf (using '0' for left and '1' for right) as the code for that character
    
    5. Encode the Data
        For each character in the input data:
            Replace it with its corresponding Huffman code
    
    6. Return the Encoded Data and Huffman Codes
        Print the Huffman codes for each character
        Print the encoded data
    
End Algorithm
