export interface Resume{
    resume_id: string,
    user_id: string,
    upload_date: Date,
    modified_date: Date,
    file_name: string,
    file_path: string,
    file_size: number,
    file_type: 'PDF' | 'DOCX'
}