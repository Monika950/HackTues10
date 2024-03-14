import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { globalVariable } from '@/globals';
import Button from './Button';

const QuizComponent = () => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isRight, setIsRight] = useState(false);

    const checkAnswer = (index: number) => {
        if (globalVariable.GPTOutput.questions[questionIndex].answers[index].isCorrect) {
            setScore(score + 1);
            setIsRight(true);
            console.warn('Correct');
        } else {
            setIsRight(false);
            console.warn('Incorrect');
        }
        setQuestionIndex(questionIndex + 1);
    }

    const renderQuiz = () => {
        if (questionIndex < globalVariable.GPTOutput.questions.length) {
            var answers = globalVariable.GPTOutput.questions[questionIndex].answers;
            return (
                <View>
                    <Text>{globalVariable.GPTOutput.questions[questionIndex].question}</Text>
                    <Button text={globalVariable.GPTOutput.questions[questionIndex].answers[0].answer} onPress={() => checkAnswer(0)} />
                    <Button text={globalVariable.GPTOutput.questions[questionIndex].answers[1].answer} onPress={() => checkAnswer(1)} />
                    <Button text={globalVariable.GPTOutput.questions[questionIndex].answers[2].answer} onPress={() => checkAnswer(2)} />
                    <Button text={globalVariable.GPTOutput.questions[questionIndex].answers[3].answer} onPress={() => checkAnswer(3)} />
                </View>
            );
        } else {
            return (
                <View>
                    <Text>Quiz Over</Text>
                    <Text>Your Score: {score}</Text>
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