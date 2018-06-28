import React from 'react';
import PropTypes from 'prop-types';

export default function ContactTable({ contacts }) {
  const contactsList = contacts.map(
    contact => (
      <tr key={contact.serial_num}>
        <td>
          <input
            type="checkbox"
            name="check_contact"
            value={contact.serial_num}
          />
        </td>
        <td>
          {contact.name}
        </td>
        <td>
          {contact.phoneNum}
        </td>
      </tr>
    ),
  );
  return (
    <table>
      <thead>
        <tr>
          <th>
            {'-'}
          </th>
          <th>
            {'이름'}
          </th>
          <th>
            {'전화번호'}
          </th>
          <th>
            {'이메일'}
          </th>
          <th>
            {'소속부서'}
          </th>
          <th>
            {'직책'}
          </th>
          <th>
            {'주소'}
          </th>
        </tr>
      </thead>
      <tbody>
        {contactsList}
      </tbody>
    </table>
  );
}

ContactTable.propTypes = {
  contacts: PropTypes.string.isRequired,
};
