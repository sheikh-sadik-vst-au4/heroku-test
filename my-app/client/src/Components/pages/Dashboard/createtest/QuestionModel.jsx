import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import axios from 'axios';


class QuestionModal extends Component {
    state = {
        modal: true,
        question: null,
        option1: null,
        option2: null,
        option3: null,
        option4: null,
        answer: null,
        marks: null,
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    };
    componentDidMount() {
        this.fetchQuestion();
    }
    fetchQuestion = async (event) => {

        await axios.get(`/question/read/${this.props.questionId}`)
            .then(response => {
                this.setState({
                    question: response.data.question,
                    option1: response.data.options.option1,
                    option2: response.data.options.option2,
                    option3: response.data.options.option3,
                    option4: response.data.options.option4,
                    answer: response.data.answer,
                    marks: response.data.marks,
                })
            })
            .catch(error => console.log(error.message))
    }

    updateQuestion = async (event) => {

        event.preventDefault();
        const question = {
            question: this.state.question,
            options: {
                option1: this.state.option1,
                option2: this.state.option2,
                option3: this.state.option3,
                option4: this.state.option4,
            },
            answer: this.state.answer,
            marks: this.state.marks,
        };

        await axios.put(`/question/update/${this.props.questionId}`, question)
            .then(response => {
                if (response.status === 200) {
                    this.props.fetchTest();
                }
            })
            .catch(error => console.log(error.message))
    }

    onChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle} close={<button className="close" onClick={this.toggle}>
                        &times;
            </button>}>
                        Edit Question
              </ModalHeader>
                    <ModalBody>
                        <form className="question-form" onSubmit={
                            this.updateQuestion
                        }>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="lable-className">Question</label>
                                </div>
                                <div className="col-md-10">
                                    <input
                                        type="text"
                                        value={this.state.question ? this.state.question : ""}
                                        className="form-control user-input"
                                        name="question"
                                        onChange={this.onChangeHandler}
                                        required
                                    ></input>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2 text-center">
                                    <label className="lable-className">A.</label>
                                </div>
                                <div className="col-md-4">
                                    <input
                                        type="text"
                                        className="form-control user-input"
                                        name="option1"
                                        value={this.state.option1 ? this.state.option1 : ""}
                                        onChange={this.onChangeHandler}
                                        required
                                    ></input>
                                </div>
                                <div className="col-md-2 text-center">
                                    <label className="lable-className">B.</label>
                                </div>
                                <div className="col-md-4">
                                    <input
                                        type="text"
                                        className="form-control user-input"
                                        name="option2"
                                        value={this.state.option2 ? this.state.option2 : ""}
                                        onChange={this.onChangeHandler}
                                        required
                                    ></input>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2 text-center">
                                    <label className="lable-className">C.</label>
                                </div>
                                <div className="col-md-4">
                                    <input
                                        type="text"
                                        className="form-control user-input"
                                        name="option3"
                                        value={this.state.option3 ? this.state.option3 : ""}
                                        onChange={this.onChangeHandler}
                                        required
                                    ></input>
                                </div>
                                <div className="col-md-2 text-center">
                                    <label className="lable-className">D.</label>
                                </div>
                                <div className="col-md-4">
                                    <input
                                        type="text"
                                        className="form-control user-input"
                                        name="option4"
                                        value={this.state.option4 ? this.state.option4 : ""}
                                        onChange={this.onChangeHandler}
                                        required
                                    ></input>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2 text-center">
                                    <label className="lable-className">Answer</label>
                                </div>
                                <div className="col-md-4">
                                    <select
                                        className="form-control"
                                        name="answer"
                                        value={this.state.answer ? this.state.answer : ""}
                                        onChange={this.onChangeHandler}
                                        required
                                    >
                                        <option value="">Choose Answer</option>
                                        <option>{this.state.option1 ? this.state.option1 : ""}</option>
                                        <option>{this.state.option2 ? this.state.option2 : ""}</option>
                                        <option>{this.state.option3 ? this.state.option3 : ""}</option>
                                        <option>{this.state.option4 ? this.state.option4 : ""}</option>
                                    </select>
                                </div>
                                <div className="col-md-2 text-center">
                                    <label className="lable-className">Marks</label>
                                </div>
                                <div className="col-md-4">
                                    <input
                                        min="1"
                                        max="99"
                                        type="number"
                                        className="form-control user-input"
                                        value={this.state.marks ? this.state.marks : ""}
                                        name="marks"
                                        onChange={this.onChangeHandler}
                                        required
                                    ></input>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="row">

                                <input value="save" type="submit" className="btn btn-primary ml-3 mr-3" onClick={this.toggle}>
                                </input>
                                <button className="btn btn-secondary" onClick={this.toggle}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default QuestionModal;