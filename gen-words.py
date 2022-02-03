import argparse

parser = argparse.ArgumentParser(description='Generate a dictionary of words that n long. By default n is 5')
parser.add_argument('-l', '--word-length', type=int, help='Desired length of words to be output. Default is 5.')
parser.add_argument('-i', '--input-file', type=str, help="File path of the dictionary used to generate outfile from. Must be in format: line seperated word list", required=True)
parser.add_argument('-o', '--output-file', type=str, help='File path for the designated output file. If file does not exist, then it is created, otherwise it is overwritten. Default is "outfile.txt"')

args = parser.parse_args()

word_length = 5
input_file = args.input_file
output_file = 'outfile.txt'

if args.word_length:
  word_length = args.word_length

if args.output_file:
  output_file = args.output_file

infile = open(input_file, 'r')
outfile = open(output_file, 'w')

lines = infile.readlines()

count = 0
total_count = 0
word_list = ""

for line in lines:
  total_count += 1
  if len(line.strip()) == word_length:
    count += 1
    word_list += line

outfile.write(word_list)
infile.close()
outfile.close()

print('-----------------------------------------------------------')
print('  - Total number of lines in dictionary: {}'.format(total_count))
print('  - {} {} letter words written to ./{}'.format(count, word_length, output_file))
print('-----------------------------------------------------------')

