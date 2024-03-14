import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { globalVariable } from '@/globals';
import Button from './Button';
import { useNavigation } from 'expo-router';

const QuizComponent = () => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isRight, setIsRight] = useState(false);
    const navigation = useNavigation();

    const resertQuiz = () => {
        setScore(0);
        setQuestionIndex(0);
    }

    const handlePress = () => {
        resertQuiz();
        navigation.navigate('index');
    }

    const checkAnswer = (index: number) => {
        if (GPTOutput().questions[questionIndex].answers[index].is_correct) {
            setScore(score + 1);
            setIsRight(true);
            console.warn('Correct');
        } else {
            setIsRight(false);
            console.warn('Incorrect');
        }
        setQuestionIndex(questionIndex + 1);
    }

    const GPTOutput = () => {
        if(typeof globalVariable.GPTOutput === 'string')
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
                        <Button text={GPTOutput().questions[questionIndex].answers[0].answer} onPress={() => checkAnswer(0)} />
                        <Button text={GPTOutput().questions[questionIndex].answers[1].answer} onPress={() => checkAnswer(1)} />
                        <Button text={GPTOutput().questions[questionIndex].answers[2].answer} onPress={() => checkAnswer(2)} />
                        <Button text={GPTOutput().questions[questionIndex].answers[3].answer} onPress={() => checkAnswer(3)} />
                    </View>
                );
            } else {
                return (
                    <View>
                        <Text>Quiz Over</Text>
                        <Text>Your Score: {score}</Text>
                        <Button onPress={handlePress} text='Go Back'/>
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

export default QuizComponent;