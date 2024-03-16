import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { globalVariable } from '@/globals';
import { useNavigation } from 'expo-router';
import Button from './Button';

const QuizComponent = () => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [color, setColor] = useState(false);
    const [pressedIndex, setPressedIndex] = useState(-1); // to highlight the correct answer after pressing
    const [answerLocked, setAnswerLocked] = useState(false); // to prevent answering while animation is ongoing
    const navigation = useNavigation();
    var allPressed1: number[] = [];
    var [allPressed, setAllPressed] = useState(allPressed1);

    const resetQuiz = () => {
        setScore(0);
        setQuestionIndex(0);
    }

    const handlePress = () => {
        resetQuiz();
        navigation.navigate('index');
    }

    const checkAnswer = (index: number) => {
        if (answerLocked) return; 
        setPressedIndex(index);
        console.log(index);
        allPressed.push(index);
        console.log(allPressed);
        setColor(true);

        const isCorrect = GPTOutput().questions[questionIndex].answers[index].is_correct;
        if (isCorrect) {
            setScore(score + 1);
            setTimeout(() => {
                setQuestionIndex(questionIndex + 1);
            }, 1000); 
        } else {
            setTimeout(() => {
                setQuestionIndex(questionIndex + 1);
            }, 1000); 
        }
        setAnswerLocked(true);
        setTimeout(() => {
            setColor(false);
            setAnswerLocked(false);
            setPressedIndex(-1);
            allPressed = [];
        }, 1000);
    }

    const GPTOutput = () => {
        if (typeof globalVariable.GPTOutput === 'string')
            globalVariable.GPTOutput = JSON.parse(globalVariable.GPTOutput);
        return globalVariable.GPTOutput;
    };

    const renderQuiz = () => {
        
        if (GPTOutput() && GPTOutput().questions && GPTOutput().questions.length > 1){
            if (questionIndex < GPTOutput().questions.length) {
                return (
                    <View>
                        <Text style={styles.question}>{GPTOutput().questions[questionIndex].question}</Text>
                        <Pressable
                            onPress={() => checkAnswer(0)}
                            style={[
                                styles.button,
                                color && GPTOutput().questions[questionIndex].answers[0].is_correct && styles.correctAnswer,
                                color && !GPTOutput().questions[questionIndex].answers[0].is_correct && pressedIndex === 1 && styles.wrongAnswer,
                            ]}
                        >
                            <Text style={styles.title}>{GPTOutput().questions[questionIndex].answers[0].answer}</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => checkAnswer(1)}
                            style={[
                                styles.button,
                                color && GPTOutput().questions[questionIndex].answers[1].is_correct && styles.correctAnswer,
                                color && !GPTOutput().questions[questionIndex].answers[1].is_correct && pressedIndex === 1 && styles.wrongAnswer,
                            ]}
                        >
                            <Text style={styles.title}>{GPTOutput().questions[questionIndex].answers[1].answer}</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => checkAnswer(2)}
                            style={[
                                styles.button,
                                color && GPTOutput().questions[questionIndex].answers[2].is_correct && styles.correctAnswer,
                                color && !GPTOutput().questions[questionIndex].answers[2].is_correct && pressedIndex === 2 && styles.wrongAnswer,
                            ]}
                        >
                            <Text style={styles.title} >{GPTOutput().questions[questionIndex].answers[2].answer}</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => checkAnswer(3)}
                            style={[
                                styles.button,
                                color && GPTOutput().questions[questionIndex].answers[3].is_correct && styles.correctAnswer,
                                color && !GPTOutput().questions[questionIndex].answers[3].is_correct && pressedIndex === 3 && styles.wrongAnswer,
                            ]}
                        >
                            <Text style={styles.title}>{GPTOutput().questions[questionIndex].answers[3].answer}</Text>
                        </Pressable>
                    </View>
                );
            } else {
                return (
                    <View>
                        <Text style={styles.score}>Quiz Over</Text>
                        <Text style={styles.score}>Your Score: {score}</Text>
                        <Button onPress={handlePress} text='Go Back' />
                    </View>
                );
            }
        } else {
            return (
                <View>
                    <Text>Loading...</Text>
                </View>
            );
        }
    };

    return (
        <View>
            {renderQuiz()}
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#fc7474',
        padding: 15,
        textAlign: "center",
        borderRadius: 100,
        marginVertical: 10,
    },
    score: {
        padding: 0,
        textAlign: "center",
        borderRadius: 100,
        marginVertical: 10,
    },
    correctAnswer: {
        backgroundColor: 'green',
    },
    wrongAnswer: {
        backgroundColor: 'red',
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
    },
    question: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginVertical: 10,
    }
});

export default QuizComponent;

