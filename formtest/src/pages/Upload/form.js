import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './form.module.scss';

const cx = classNames.bind(styles);

function Form() {
    // Khởi tạo trạng thái cho các trường trong form
    const [formData, setFormData] = useState({
        phone: '',
        email: '',
        province: '',
        district: '',
    });
    const [result, setResult] = useState([]);

    // Danh sách tỉnh thành phố và quận huyện
    const provinces = ['Chọn tỉnh / thành phố', 'Hà Nội', 'TP.Hồ Chí Minh', 'Nam Định'];
    const districts = {
        'Hà Nội': ['Chọn quận / huyện', 'Đống Đa', 'Cầu Giấy', 'Hà Đông'],
        'TP.Hồ Chí Minh': ['Chọn quận / huyện', 'Quận 1', 'Quận 2', 'Quận 3'],
        'Nam Định': ['Chọn quận / huyện', 'Xuân Trường', 'Giao Thủy', 'Hải Hậu'],
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        if (formData.phone === '') {
            alert('Vui lòng nhập số điện thoại');
        } else if (formData.email === '') {
            alert('Vui lòng nhập email');
        } else if (formData.province === '') {
            alert('Vui lòng chọn tỉnh thành phố');
        } else if (formData.district === '') {
            alert('Vui lòng chọn quận huyện');
        } else {
            alert('Success');
            setResult(formData);
            setFormData({
                phone: '',
                email: '',
                province: '',
                district: '',
            });
        }
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div>
            <div className={cx('container')}>
                <div className={cx('main')}>
                    <h2>Form</h2>
                    <form onSubmit={handleSubmit} className={cx('form-main')}>
                        <div className={cx('form_main_container')}>
                            <label htmlFor="phone">Số điện thoại:</label>
                            <br />
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className={cx('input')}
                            />
                            <br />

                            <label htmlFor="email">Email:</label>
                            <br />
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={cx('input')}
                            />

                            <br />

                            <label>Tỉnh / Thành phố:</label>
                            <br />
                            <select
                                id="province"
                                name="province"
                                value={formData.province}
                                onChange={handleInputChange}
                                className={cx('input')}
                            >
                                {provinces.map((province) => (
                                    <option key={province} value={province}>
                                        {province}
                                    </option>
                                ))}
                            </select>

                            <br />

                            <label>Quận / Huyện:</label>
                            <select
                                id="district"
                                name="district"
                                value={formData.district}
                                onChange={handleInputChange}
                                className={cx('input')}
                            >
                                {formData.province !== '' &&
                                    districts[formData.province].map((district) => (
                                        <option key={district} value={district}>
                                            {district}
                                        </option>
                                    ))}
                            </select>
                            <br />
                            <br />

                            <button type="submit" className={cx('submit_btn')}>
                                Submit
                            </button>
                        </div>
                    </form>
                    <div className={cx('result')}>
                        <h2>Kết quả</h2>
                        <div className={cx('result_main')}>
                            <div>Số điện thoại:{result.phone}</div>
                            <div>Email:{result.email}</div>
                            <div>Tỉnh/Thành phố: {result.province}</div>
                            <div>Quận/huyện: {result.district}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;
