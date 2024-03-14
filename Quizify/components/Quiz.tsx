import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalVariable } from '@/globals';
import { useNavigation } from 'expo-router';
import Button from './Button';

const QuizComponent = () => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isRight, setIsRight] = useState(false);
    const [isWrong, setIsWrong] = useState(false);
    const [answerLocked, setAnswerLocked] = useState(false); // to prevent answering while animation is ongoing
    const navigation = useNavigation();

    const resetQuiz = () => {
        setScore(0);
        setQuestionIndex(0);
    }

    const handlePress = () => {
        resetQuiz();
        navigation.navigate('index');
    }

    const checkAnswer = (index: number) => {
        if (answerLocked) return; // Prevent answering while animation is ongoing

        const isCorrect = GPTOutput().questions[questionIndex].answers[index].is_correct;
        if (isCorrect) {
            setScore(score + 1);
            setIsRight(true);
            setIsWrong(false);
            setTimeout(() => {
                setIsRight(false);
                setQuestionIndex(questionIndex + 1);
            }, 1000); // Delay before moving to the next question
        } else {
            setIsRight(false);
            setIsWrong(true);
            setTimeout(() => {
                setIsWrong(false);
                setQuestionIndex(questionIndex + 1);
            }, 1000); // Delay before moving to the next question
        }
        setAnswerLocked(true); // Lock answering during animation
        setTimeout(() => {
            setAnswerLocked(false); // Unlock answering after animation
        }, 1000);
    }

    const GPTOutput = () => {
        if (typeof globalVariable.GPTOutput === 'string')
            globalVariable.GPTOutput = JSON.parse(globalVariable.GPTOutput);
        return globalVariable.GPTOutput;
    };

    const renderQuiz = () => {
        // Check if globalVariable.GPTOutput is defined
        if (GPTOutput() && GPTOutput().questions) {
            if (questionIndex < GPTOutput().questions.length) {
                return (
                    <View>
                        <Text>{GPTOutput().questions[questionIndex].question}</Text>
                        <Button
                            text={GPTOutput().questions[questionIndex].answers[0].answer}
                            onPress={() => checkAnswer(0)}
                            style={[
                                styles.button,
                                isRight && styles.correctAnswer,
                                isWrong && styles.wrongAnswer,
                            ]}
                        />
                        <Button
                            text={GPTOutput().questions[questionIndex].answers[1].answer}
                            onPress={() => checkAnswer(1)}
                            style={[
                                styles.button,
                                isRight && styles.correctAnswer,
                                isWrong && styles.wrongAnswer,
                            ]}
                        />
                        <Button
                            text={GPTOutput().questions[questionIndex].answers[2].answer}
                            onPress={() => checkAnswer(2)}
                            style={[
                                styles.button,
                                isRight && styles.correctAnswer,
                                isWrong && styles.wrongAnswer,
                            ]}
                        />
                        <Button
                            text={GPTOutput().questions[questionIndex].answers[3].answer}
                            onPress={() => checkAnswer(3)}
                            style={[
                                styles.button,
                                isRight && styles.correctAnswer,
                                isWrong && styles.wrongAnswer,
                            ]}
                        />
                    </View>
                );
            } else {
                return (
                    <View>
                        <Text>Quiz Over</Text>
                        <Text>Your Score: {score}</Text>
                        <Button onPress={handlePress} text='Go Back' />
                    </View>
                );
            }
        } else {
            // Handle the case when globalVariable.GPTOutput is not defined yet
            return (
                <View>
                    <Text>Loading...</Text>
                </View>
            );
        }
    }

    return (
        <View>
            {renderQuiz()}
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        marginVertical: 10,
    },
    correctAnswer: {
        backgroundColor: 'green',
    },
    wrongAnswer: {
        backgroundColor: 'red',
    },
});

export default QuizComponent;
